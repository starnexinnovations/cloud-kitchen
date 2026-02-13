import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/ui/InputFeild";
import SelectField from "../components/ui/SelectFeild";
import WhatsAppButton from "../components/whatsapp/Whatsapp";

const BookAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    preferredDateTime: "",
    eventType: "",
    cuisinePreference: ""
  });

  const [errors, setErrors] = useState<any>({});
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Validation
  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.preferredDateTime)
      newErrors.preferredDateTime = "Date & Time required";
    if (!formData.eventType)
      newErrors.eventType = "Select event type";
    if (!formData.cuisinePreference)
      newErrors.cuisinePreference = "Select cuisine";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Clear error on typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors((prev: any) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const response = await fetch(
      "http://localhost/cloudkitchen/api/book-appointment.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 3000);
    } else {
      alert("Email sending failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error. Check if Apache is running.");
  }
};

  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-br from-background via-white to-background flex items-center relative overflow-hidden">
      
      {/* Premium Background Animation */}
      <div className="absolute -left-32 top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-slow-float"></div>
      <div className="absolute -right-32 bottom-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-slow-float-reverse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">

          {/* Left Decorative Ring */}
          <div className="hidden md:flex md:col-span-1 h-[520px] rounded-3xl bg-primary/5 border border-primary/10 items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Premium Catering
            </h3>
            <p className="text-sm text-text-secondary">
              Elegant service tailored to your special occasion.
            </p>
          </div>
        </div>

          {/* Center Form */}
          <div className="md:col-span-3 bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary">
                Book Your Event
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

              <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required error={errors.name}/>
              <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required error={errors.phone}/>

              <InputField label="Location" name="location" value={formData.location} onChange={handleChange} required error={errors.location}/>
              <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required error={errors.email}/>

              <InputField label="Date & Time" name="preferredDateTime" type="datetime-local" value={formData.preferredDateTime} onChange={handleChange} required error={errors.preferredDateTime}/>

              <SelectField
                label="Event Type"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                error={errors.eventType}
                options={["Wedding", "Birthday", "Corporate", "Housewarming"]}
              />

              <div className="col-span-2">
                <SelectField
                  label="Cuisine Preference"
                  name="cuisinePreference"
                  value={formData.cuisinePreference}
                  onChange={handleChange}
                  required
                  error={errors.cuisinePreference}
                  options={["South Indian", "North Indian", "Chinese", "Multi-Cuisine"]}
                />
              </div>

              <div className="col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-full font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Confirm Booking
                </button>
              </div>

            </form>
          </div>

          {/* Right Decorative Ring */}
          <div className="hidden md:flex md:col-span-1 h-[520px] rounded-3xl bg-secondary/5 border border-secondary/10 items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-xl font-semibold text-secondary mb-3">
              Trusted Service
            </h3>
            <p className="text-sm text-text-secondary">
              We deliver authentic flavors with professional excellence.
            </p>
          </div>
        </div>

        </div>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-md animate-popup">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Booking Confirmed!
            </h3>
            <p className="text-gray-600">
              Thank you for choosing us. Our catering team will contact you shortly.
            </p>
          </div>
        </div>
      )}
      <WhatsAppButton message="Hello! I would like to inquire about catering services for my event." />
    </div>
  );
};

export default BookAppointment;