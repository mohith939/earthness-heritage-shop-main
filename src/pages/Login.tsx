import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("login"); // "login" or "otp"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email !== "earthnes1@gmail.com" || password !== "earthnes1Priya") {
      toast({
        title: "Invalid Credentials",
        description: "Please check your email and password.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbxBGo69N_LPnW_bUnOltd7nV0DAOoQVyu2B-sdoSPvafqrRNv7Kw-EHgT78s3A2PMLI/exec?action=request_otp`, {
        method: "GET",
      });

      const result = await response.json();
      if (result.success) {
        setStep("otp");
        toast({
          title: "OTP Sent",
          description: "Check your email for the OTP.",
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxBGo69N_LPnW_bUnOltd7nV0DAOoQVyu2B-sdoSPvafqrRNv7Kw-EHgT78s3A2PMLI/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "verify_otp", otp }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Login Successful",
          description: "Welcome to the admin panel.",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Invalid OTP",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify OTP. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/50">
      <div className="retro-card max-w-md w-full mx-4 p-8">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold mb-2">EARTHNESS Admin</h1>
          <p className="text-muted-foreground">Login to access the admin panel</p>
        </div>

        {step === "login" ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending OTP..." : "Login & Send OTP"}
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Enter the 6-digit OTP sent to mohithchalamcharla@gmail.com
              </p>
              <InputOTP
                value={otp}
                onChange={setOtp}
                maxLength={6}
                className="justify-center"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button onClick={handleOtpSubmit} className="w-full" disabled={isSubmitting || otp.length !== 6}>
              {isSubmitting ? "Verifying..." : "Verify OTP"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setStep("login")}
              className="w-full"
            >
              Back to Login
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Login;
