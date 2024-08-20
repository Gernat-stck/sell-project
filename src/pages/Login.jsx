import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false)
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            src="/placeholder.svg"
            alt="Your Company"
            width={48}
            height={48}
            className="mx-auto h-12 w-auto"
            style={{ aspectRatio: "48/48", objectFit: "cover" }}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            {isRegistering ? "Register" : "Sign in to your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {isRegistering ? "Or already have an account?" : "Don't have an account yet?"}
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="font-medium text-primary hover:text-primary-foreground"
            >
              {isRegistering ? "Sign in" : "Register"}
            </button>
          </p>
          <p className="mt-4 text-center text-sm text-muted-foreground">or login with</p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            {isRegistering && (
              <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div className="mb-4">
              <Label htmlFor="email-address">Email address</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
                    <div className="h-5 w-5" />
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember-me" name="remember-me" defaultChecked />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-primary hover:text-primary-foreground" prefetch={false}>
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="group relative flex w-full justify-center rounded-full py-2 px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="h-5 w-5 mr-2" />
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              className="group relative flex w-full justify-center rounded-full py-2 px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="h-5 w-5 mr-2" />
              Sign in with Facebook
            </Button>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-full bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isRegistering ? "Register" : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}