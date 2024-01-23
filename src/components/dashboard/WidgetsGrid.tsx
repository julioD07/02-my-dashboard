"use client"
import { useAppSelector } from "@/store";
import { SimpleWidget } from "..";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

    const count = useAppSelector((state) => state.counterSlice.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget 
        subtitle="Productos agregados"
        title={`${count}`}
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-500"/>}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};
