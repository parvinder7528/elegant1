const admincontroller = {
  createBooking: async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        serviceId,
        bookingDate,
        timeSlot,
        guestCount,
        price,
        location,
        notes,
      } = req.body;

      // 1️⃣ Validation
      if (
        !name ||
        !email ||
        !phone ||
        !serviceId ||
        !bookingDate ||
        !timeSlot ||
        !guestCount ||
        !price ||
        !location
      ) {
        return res.status(400).json({
          success: false,
          message: "All required fields must be filled",
        });
      }

      // 2️⃣ Find or create user
      let user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ name, email, phone });
      }

      // 3️⃣ Check existing booking
      const existingBooking = await Booking.findOne({
        userId: user._id,
        serviceId,
        bookingDate: new Date(bookingDate),
      });

      if (existingBooking) {
        return res.status(409).json({
          success: false,
          message: "You have already booked this service for this date",
        });
      }

      // 4️⃣ Create booking
      const booking = await Booking.create({
        userId: user._id,
        serviceId,
        bookingDate,
        timeSlot,
        guestCount,
        price,
        location, // save location
        notes,    // save notes
      });

      return res.status(201).json({
        success: true,
        message: "Booking created successfully",
        data: { booking, user },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  },
};

export default admincontroller;
