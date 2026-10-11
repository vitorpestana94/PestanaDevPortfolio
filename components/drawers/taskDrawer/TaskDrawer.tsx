"use client";

import Interface from "./TaskDrawerInterface";
import useTaskDrawer from "./useTaskDrawer";
import Drawer from "../drawer/Drawer";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import SaveButton from "@/components/buttons/animatedButton/AnimatedButton";
import Icon from "@/components/icons/Icons";
import Error from "@/components/errors/error/Error";
import OwnerDropdown from "./subComponents/OwnerDropdown";

function Label({ text }: { text: string }) {
   return <p className="profileDataLabel">{text}</p>;
}

export default function TaskDrawer(props: Interface) {
   const {
      t,
      isEdit,
      ownerId,
      errors,
      isLoading,
      register,
      handleSubmit,
      submit,
      remove,
      selectOwner,
      hasDeadline,
      clearDeadline,
   } = useTaskDrawer(props);

   return (
      <Drawer title={isEdit ? t("title") : t("createTitle")} close={props.close}>
         <Form
            handleSubmit={handleSubmit}
            onSubmit={submit}
            className="flex-1 w-full flex flex-col gap-y-5"
         >
            <div className="w-full flex flex-col gap-y-1.5">
               <Label text={t("name")} />
               <input
                  {...register("taskName", { required: t("errors.name"), maxLength: 150 })}
                  type="text"
                  className="profileDataInputs"
                  autoComplete="off"
               />
               <Error
                  shouldRender={!!errors.taskName?.message}
                  message={errors.taskName?.message ?? ""}
               />
            </div>
            <div className="w-full flex flex-col gap-y-1.5">
               <Label text={t("type")} />
               <input
                  {...register("taskType", { maxLength: 50 })}
                  type="text"
                  className="profileDataInputs"
                  autoComplete="off"
               />
            </div>
            <div className="w-full flex flex-col gap-y-1.5">
               <Label text={t("owner")} />
               <OwnerDropdown
                  boardUsers={props.boardUsers}
                  ownerId={ownerId}
                  noOwnerLabel={t("noOwner")}
                  selectOwner={selectOwner}
               />
            </div>
            <div className="w-full flex flex-col gap-y-1.5">
               <Label text={t("deadline")} />
               <div className="relative w-full flex items-center">
                  <input
                     {...register("deadline")}
                     type="datetime-local"
                     className="profileDataInputs pl-5! scheme-dark cursor-pointer"
                  />
                  {hasDeadline && (
                     <button
                        type="button"
                        title={t("clearDeadline")}
                        className="absolute right-11 cursor-pointer group"
                        onClick={clearDeadline}
                     >
                        <Icon
                           iconName="xCross"
                           className="aspect-square w-3 opacity-60 group-hover:opacity-100"
                        />
                     </button>
                  )}
               </div>
            </div>
            <div className="w-full flex flex-col gap-y-1.5">
               <Label text={t("description")} />
               <textarea
                  {...register("taskDescription")}
                  className="profileDataInputs rounded-2xl! resize-none aspect-[1/0.5]"
               />
            </div>
            <div className="mt-auto w-full flex justify-center items-center gap-x-4">
               {isEdit && (
                  <button
                     type="button"
                     title={t("delete")}
                     className="scrumBoardButton group hover:border-[#38b6ff]/30 py-2.5!"
                     onClick={remove}
                  >
                     <Icon
                        iconName="trash"
                        className="aspect-square w-3.5 stroke-[#bfbfbf] group-hover:stroke-red-600"
                     />
                  </button>
               )}
               <SaveButton
                  isLoading={isLoading}
                  buttonLabel={isEdit ? t("save") : t("add")}
                  isFormWithErrors={errors.taskName !== undefined}
                  styles="w-5/12! self-auto!"
               />
            </div>
         </Form>
      </Drawer>
   );
}
