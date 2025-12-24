import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { toast } from "sonner";
import API from "../../api/api"; // Axios instance

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await API.post("/api/login", {
        email,
        password,
      });

      if (response.data?.success) {
        const { token, user } = response.data;

        // Save token
        localStorage.setItem("authToken", token);

        toast.success(`Welcome back, ${user?.name || "Admin"}!`);
        navigate("/admin/dashboard");
      } else {
        toast.error(response.data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error?.response?.data?.message ||
          "Server error. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-burgundy" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-primary-foreground">
          <Sparkles className="w-16 h-16 mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4 text-center">
            Elan Beauty
          </h1>
          <p className="text-xl opacity-90 text-center max-w-md">
            Elevate your salon management with elegance and efficiency
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <Sparkles className="w-10 h-10 mx-auto text-primary mb-2" />
            <h1 className="text-3xl font-bold">Elan Beauty</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">Welcome Back</h2>
            <p className="text-muted-foreground mt-2">
              Sign in to your admin dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* EMAIL */}
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="admin@elanbeauty.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Need help?{" "}
            <a
              href="mailto:support@elanbeauty.com"
              className="text-primary hover:underline"
            >
              support@elanbeauty.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
