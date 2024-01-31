"use client";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  // username: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const RegisterForm = ({ type }: { type: "register" | "login" }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/social/messages",
    });
    console.log("res", res);
  }

  return (
    <div
      className={cn({
        ["w-full h-screen flex justify-center items-center"]:
          type === "register",
        ["w-fit  flex flex-col gap-7"]: type === "login",
      })}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-96 h-fit border p-10 rounded-lg border-yellow-300"
        >
          {/* <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">sign in/up</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
