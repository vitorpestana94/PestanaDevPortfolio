"use client";

import Interface from "./CreateScrumBoardDrawerInterface";
import useCreateScrumBoardDrawer from "./useCreateScrumBoardDrawer";
import Drawer from "../drawer/Drawer";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import CreateButton from "@/components/buttons/animatedButton/AnimatedButton";
import Error from "@/components/errors/error/Error";

export default function CreateScrumBoardDrawer({ close }: Interface) {
   const { t, errors, isLoading, register, handleSubmit, submit } =
      useCreateScrumBoardDrawer(close);

   return (
      <Drawer title={t("title")} close={close}>
         <Form
            handleSubmit={handleSubmit}
            onSubmit={submit}
            className="flex-1 w-full flex flex-col gap-y-6"
         >
            <div className="w-full flex flex-col gap-y-1.5">
               <input
                  {...register("name", {
                     required: t("errors.name"),
                     maxLength: 100,
                  })}
                  type="text"
                  placeholder={t("name")}
                  className="profileDataInputs"
                  autoComplete="off"
               />
               <Error
                  shouldRender={!!errors.name?.message}
                  message={errors.name?.message ?? ""}
               />
            </div>
            <textarea
               {...register("description")}
               placeholder={t("description")}
               className="profileDataInputs rounded-2xl! resize-none aspect-[1/0.4]"
            />
            <div className="mt-auto w-full flex justify-center">
               <CreateButton
                  isLoading={isLoading}
                  buttonLabel={t("button")}
                  isFormWithErrors={errors.name !== undefined}
                  styles="w-6/12!"
               />
            </div>
         </Form>
      </Drawer>
   );
}
