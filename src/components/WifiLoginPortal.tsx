import { useState } from "react";
import { Wifi, User, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const WifiLoginPortal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Connecting...",
      description: "Please wait while we connect you to the internet",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-4">
      <Card className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl animate-fade-in">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Wifi className="h-16 w-16 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-400 rounded-full animate-ping" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">TechSanta</h1>
          <p className="text-blue-200 text-sm">WiFi Portal</p>
        </div>

        {/* Info Message */}
        <div className="bg-white/5 border border-white/20 rounded-lg p-4 mb-6">
          <p className="text-white text-sm text-center">
            Please log in to use the internet hotspot service
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white text-sm font-medium">
              Username
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-200" />
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-blue-200/50 focus:bg-white/20 focus:border-white/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-200" />
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-blue-200/50 focus:bg-white/20 focus:border-white/50 transition-all"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold py-6 text-lg transition-all hover:scale-105"
          >
            Connect to WiFi
          </Button>
        </form>

        {/* Support Contact */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Phone className="h-4 w-4" />
            <p className="text-sm">Support: <span className="font-semibold">0924251197</span></p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-blue-200/60 text-xs mt-6">
          Powered by TechSanta WiFi Solutions
        </p>
      </Card>
    </div>
  );
};
