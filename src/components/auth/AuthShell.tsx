import Link from 'next/link';
import { ReactNode } from 'react';

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-paper px-3 py-6 sm:px-6 sm:py-12 min-w-0">
      {/* Subtle dotted grid texture */}
      <div className="dotted-bg pointer-events-none absolute inset-0 opacity-50" />

      {/* Main Center Neo-Brutalist Container */}
      <div className="relative z-10 w-full max-w-[420px] sm:max-w-[440px] mx-auto">
        {/* Top return home button */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-ink bg-surface px-3.5 sm:px-4 py-1.5 font-display text-[11px] sm:text-xs font-black uppercase tracking-wider text-ink shadow-[2.5px_2.5px_0px_#0c0b09] sm:shadow-[4px_4px_0px_#0c0b09] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C6FF4D]"
          >
            <span className="rounded-md border border-ink bg-ink px-1.5 py-0.5 font-display text-[9px] sm:text-[10px] text-[#C6FF4D]">HP.</span>
            <span>Back to home</span>
          </Link>
        </div>

        {/* Outer Frame */}
        <div className="relative">
          {/* Electric Lime offset backdrop box */}
          <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2.5 sm:-right-2.5 inset-0 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-ink bg-[#C6FF4D] pointer-events-none" />

          {/* Main Card */}
          <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-ink bg-surface p-4 sm:p-8 shadow-[4px_4px_0px_#0c0b09] sm:shadow-[8px_8px_0px_#0c0b09]">
            {/* Header inside Card */}
            <div className="mb-4 sm:mb-6 text-center">
              <div className="mb-2 sm:mb-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-ink bg-[#C6FF4D] px-3 py-0.5 sm:px-3.5 sm:py-1 font-display text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-ink shadow-[2px_2px_0px_#0c0b09]">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-ink animate-pulse" />
                <span>{eyebrow}</span>
              </div>
              <h1 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-ink leading-tight">
                {title}
              </h1>
              <p className="mx-auto mt-1 sm:mt-2 max-w-xs font-sans text-[11px] sm:text-sm font-bold leading-relaxed text-ink/70">
                {subtitle}
              </p>

              {/* Dividing line */}
              <div className="mt-3.5 sm:mt-5 flex items-center justify-center gap-2.5 sm:gap-3">
                <div className="h-0.5 w-8 sm:w-10 bg-ink/15" />
                <span className="font-display text-[9px] font-extrabold uppercase tracking-widest text-ink/40">
                  AI INTERVIEW
                </span>
                <div className="h-0.5 w-8 sm:w-10 bg-ink/15" />
              </div>
            </div>

            {/* Clerk Auth Widget */}
            <div className="flex w-full flex-col items-center justify-center min-w-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const clerkAppearance = {
  variables: {
    colorPrimary: '#0c0b09',
    colorText: '#0c0b09',
    colorTextSecondary: '#0c0b09',
    colorBackground: 'transparent',
    colorInputBackground: '#ffffff',
    colorInputText: '#0c0b09',
    borderRadius: '0.75rem',
    fontFamily: 'var(--font-outfit), sans-serif',
  },
  elements: {
    rootBox: 'w-full !bg-transparent min-w-0',
    cardBox: '!border-0 !shadow-none !bg-transparent w-full !p-0 !m-0 overflow-visible min-w-0',
    card: '!border-0 !shadow-none !bg-transparent !p-0 !m-0 w-full overflow-visible min-w-0',
    header: 'hidden',
    headerTitle: 'hidden',
    headerSubtitle: 'hidden',
    socialButtons: '!grid !grid-cols-2 !gap-2.5 sm:!gap-3 !w-full',
    socialButtonsBlockButton:
      '!border-2 sm:!border-3 !border-ink !bg-surface !shadow-[2.5px_2.5px_0px_#0c0b09] sm:!shadow-[4px_4px_0px_#0c0b09] hover:!bg-[#C6FF4D] hover:!shadow-[4px_4px_0px_#0c0b09] !transition-all !duration-150 !rounded-xl !font-display !font-black !text-ink !text-xs sm:!text-sm !uppercase !tracking-wider !py-2.5 sm:!py-3 !w-full !flex !items-center !justify-center !gap-2 !cursor-pointer',
    socialButtonsBlockButtonText: '!font-display !font-black !text-ink !uppercase !text-[11px] sm:!text-xs !tracking-wider',
    socialButtonsBlockButtonArrow: 'hidden',
    formButtonPrimary:
      '!border-3 sm:!border-4 !border-ink !bg-ink !text-[#C6FF4D] !shadow-[4px_4px_0px_#0c0b09] sm:!shadow-[6px_6px_0px_#0c0b09] hover:!bg-[#C6FF4D] hover:!text-ink hover:!shadow-[6px_6px_0px_#0c0b09] !transition-all !duration-150 !rounded-xl !font-display !font-black !normal-case !uppercase !tracking-wider !text-sm sm:!text-base !py-3 sm:!py-3.5 !mt-2 sm:!mt-3 !w-full !cursor-pointer',
    formFieldInput:
      '!border-2 sm:!border-3 !border-ink !shadow-[2px_2px_0px_#0c0b09] sm:!shadow-[3px_3px_0px_#0c0b09] !rounded-xl !bg-surface !px-3.5 sm:!px-4 !py-2.5 sm:!py-3 !font-sans !font-bold !text-xs sm:!text-sm !text-ink placeholder:!text-ink/30 focus:!border-ink focus:!shadow-[4px_4px_0px_#C6FF4D] !transition-all !outline-none',
    formFieldLabel: '!font-display !font-black !uppercase !text-[10px] sm:!text-xs !tracking-wider !text-ink !mb-1',
    footer: '!bg-transparent !border-0 !pt-4 sm:!pt-6 !flex !flex-col !items-center !justify-center !gap-1.5 !shadow-none !w-full',
    footerAction: '!bg-transparent !border-0 !shadow-none !flex !items-center !justify-center !gap-1.5 !font-sans !text-xs sm:!text-sm !font-medium !text-ink/80',
    footerActionText: '!text-ink/70 !font-bold !text-xs sm:!text-sm',
    footerActionLink:
      '!font-display !font-black !text-ink !underline !decoration-[#C6FF4D] !decoration-4 !underline-offset-4 hover:!text-[#FF5C00] !transition-colors !ml-1',
    dividerLine: '!bg-ink/20 !h-0.5',
    dividerText: '!font-display !font-black !text-[10px] sm:!text-xs !uppercase !tracking-widest !text-ink/40 !px-2.5 !bg-transparent',
    identityPreview: '!border-2 sm:!border-3 !border-ink !rounded-xl !p-3 sm:!p-3.5 !bg-surface !shadow-[2.5px_2.5px_0px_#0c0b09] !flex !items-center !justify-between !mb-3',
    identityPreviewText: '!font-display !font-extrabold !text-ink !text-xs sm:!text-sm',
    identityPreviewEditButtonIcon: '!text-ink',
    identityPreviewEditButton: '!font-display !font-black !text-ink !uppercase !text-[10px] sm:!text-xs hover:!text-[#FF5C00] !cursor-pointer',
    formResendCodeLink: '!font-display !font-bold !text-ink hover:!text-[#C6FF4D]',
    otpCodeFieldInput: '!border-2 sm:!border-3 !border-ink !shadow-[2px_2px_0px_#0c0b09] !rounded-xl !bg-surface !font-display !font-black !text-ink focus:!shadow-[4px_4px_0px_#C6FF4D]',
    clerkLogo: 'hidden',
  },
};
