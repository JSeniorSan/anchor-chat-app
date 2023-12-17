"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { createCourseAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/shared/ui/utils";

const createCourseSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const SharedForm = ({
  revalidatePagePath,
  className,
  type,
}: {
  revalidatePagePath: string;
  className?: string;
  type: "register" | "login";
}) => {
  const form = useForm({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const [isCreateLoading, startCreateTransition] = useTransition();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            await createCourseAction(revalidatePagePath, data);
          });
        })}
        className={cn(className, "space-y-5")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
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
        <Button type="submit" disabled={isCreateLoading}>
          {type === "login" ? "sign in" : "sign up"}
        </Button>
      </form>
    </Form>
  );
};

export default SharedForm;
