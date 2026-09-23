"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "55c7e39a-585e-49a4-be0e-8a628aa006ac");
    formData.append("subject", "New Portfolio Message — PMO");
    formData.append("from_name", "PMO Portfolio");
    formData.append("replyto", formData.get("email") as string);
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-shell px-6 py-28 text-center md:px-10 md:py-40"
    >
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.3em] text-brass">
          10 <span className="text-paper-dim"> FINAL TRANSMISSION</span>
        </p>
      </Reveal>

      <Reveal delay={90}>
        <h2 className="mx-auto mt-7 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight text-paper md:text-7xl">
          Still <span className="italic text-brass">curious?</span>
        </h2>
      </Reveal>

      <Reveal delay={180}>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-paper-dim">
          If you&rsquo;re building something interesting, solving a difficult
          problem, or simply have a question worth exploring, my inbox is open.
        </p>
      </Reveal>

      <Reveal delay={270}>
        <div className="mx-auto mt-12 max-w-2xl text-left">
          {status === "success" ? (
            <div className="border border-brass px-6 py-12 text-center">
              <Check className="mx-auto mb-5 text-brass" size={28} strokeWidth={1.5} />

              <p className="font-mono text-xs tracking-[0.2em] text-brass">
                MESSAGE RECEIVED
              </p>

              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                Thanks for reaching out. I&rsquo;ll get back to you as soon as I
                can.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-7 font-mono text-[11px] tracking-[0.2em] text-paper-dim underline underline-offset-4 transition-colors hover:text-brass"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block font-mono text-[10px] tracking-[0.25em] text-paper-dim"
                >
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border-b border-paper-dim/30 bg-transparent px-0 py-4 text-sm text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-brass"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block font-mono text-[10px] tracking-[0.25em] text-paper-dim"
                >
                  YOUR EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-paper-dim/30 bg-transparent px-0 py-4 text-sm text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-brass"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block font-mono text-[10px] tracking-[0.25em] text-paper-dim"
                >
                  WHAT&rsquo;S ON YOUR MIND?
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about what you're working on..."
                  className="w-full resize-none border-b border-paper-dim/30 bg-transparent px-0 py-4 text-sm text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-brass"
                />
              </div>

              {status === "error" && (
                <p className="font-mono text-[11px] tracking-[0.1em] text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-3 border border-brass px-9 py-4 font-mono text-xs tracking-[0.2em] text-brass transition-colors duration-300 hover:bg-brass hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      SENDING
                      <Loader2
                        size={16}
                        strokeWidth={1.75}
                        className="animate-spin"
                      />
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <ArrowRight
                        size={16}
                        strokeWidth={1.75}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}