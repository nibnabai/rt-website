'use client';

import { ModalCloseIcon } from '../icons';
import { EXTRA_NEEDS } from './extra-needs-data';
import { PersonaAvatarSelector } from './PersonaAvatarSelector';

const form = EXTRA_NEEDS.personaForm;

function FormField({
  label,
  placeholder,
  className = ''
}: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[14px] font-bold text-[#17234c]">{label}</label>
      <div className="mt-2 flex h-[50px] items-center rounded-xl bg-[#f8f8f9] px-4 text-[14px] text-[rgba(10,10,10,0.5)]">
        {placeholder}
      </div>
    </div>
  );
}

export function PersonaBuilderMockup() {
  return (
    <div className="w-full min-w-0 max-w-[701px] self-start overflow-hidden rounded-2xl border border-[#e4e1db] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] sm:rounded-[20px]">
      <div className="flex items-start justify-between gap-3 border-b border-[#e2e2e2] px-4 pt-5 pb-3 sm:items-center sm:px-[30px] sm:pt-6 sm:pb-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-[20px] font-semibold leading-snug text-[#17234c] sm:text-[24px] sm:leading-normal">
            {form.title}
          </h3>
          <p className="text-[13px] leading-[19px] text-[rgba(84,96,135,0.7)] sm:text-[14px] sm:leading-[21px]">
            {form.subtitle}
          </p>
        </div>
        <button
          type="button"
          className="flex size-9 shrink-0 items-center justify-center rounded-[10px] p-2 text-[#546087] transition-colors hover:bg-[#f8f8f9]"
          aria-label="Close"
        >
          <ModalCloseIcon />
        </button>
      </div>

      <div className="min-w-0 space-y-5 px-4 pt-5 sm:space-y-6 sm:px-8 sm:pt-6">
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-[#17234c] sm:text-[16px]">
            {form.profilePhoto}
          </p>
          <div className="mt-4">
            <PersonaAvatarSelector hint={form.profileHint} />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <FormField
            label={form.fullName.label}
            placeholder={form.fullName.placeholder}
            className="min-w-0 flex-1"
          />
          <FormField
            label={form.age.label}
            placeholder={form.age.placeholder}
            className="min-w-0 sm:w-[212px] sm:shrink-0"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label={form.location.label}
            placeholder={form.location.placeholder}
          />
          <FormField
            label={form.occupation.label}
            placeholder={form.occupation.placeholder}
          />
        </div>

        <div>
          <label className="text-[14px] font-bold text-[#17234c]">
            {form.character.label}
          </label>
          <div className="mt-2 min-h-[80px] rounded-xl bg-[#f8f8f9] px-4 py-3 text-[14px] leading-[21px] text-[rgba(10,10,10,0.5)]">
            {form.character.placeholder}
          </div>
          <p className="mt-2 text-[12px] text-[rgba(84,96,135,0.7)]">
            {form.character.hint}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-bold text-[#17234c]">
              {form.temperament.label}
            </p>
            <span className="rounded-full bg-[rgba(252,211,77,0.08)] px-3 py-0.5 text-[13px] font-bold text-[#fad55b]">
              {form.temperament.value}
            </span>
          </div>
          <div className="relative mt-3 h-3 rounded-full bg-linear-to-r from-[#86efac] via-[#fcd34d] to-[#fda4af]">
            <div
              className="animate-temperament-thumb absolute top-0 h-3 w-1 -translate-x-1/2 rounded-full bg-white shadow-md"
              aria-hidden
            />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-[rgba(84,96,135,0.7)]">
            <span>{form.temperament.calm}</span>
            <span>{form.temperament.neutral}</span>
            <span>{form.temperament.intense}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 border-t border-[#e2e2e2] px-4 py-4 sm:flex-row sm:items-center sm:justify-end sm:gap-3 sm:px-8 sm:py-5">
        <button
          type="button"
          className="w-full rounded-xl bg-[#f8f8f9] px-[22px] py-[11px] text-[14px] leading-[21px] text-[#546087] sm:w-auto"
        >
          {form.cancel}
        </button>
        <button
          type="button"
          disabled
          className="w-full rounded-xl bg-linear-to-b from-[#b170dd] to-[#8678e0] px-[26px] py-[11px] text-[14px] font-bold leading-[21px] text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {form.submit}
        </button>
      </div>
    </div>
  );
}
