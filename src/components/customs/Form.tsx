import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Form() {

  function handleLogin(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    alert(" " + email + " " + password);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto mt-10 space-y-6 border p-3 rounded-md shadow-2xl">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <div className="flex items-center border rounded-md px-3">
            <FaEnvelope className="text-gray-500 mr-2" />
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="border-none focus-visible:ring-0"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="flex items-center border rounded-md px-3">
            <FaLock className="text-gray-500 mr-2" />
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              className="border-none focus-visible:ring-0"
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </div>
    </form>
  );
}
