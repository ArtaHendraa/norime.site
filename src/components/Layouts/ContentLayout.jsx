/* eslint-disable react/prop-types */

import Hading from "../Elements/Hading/Hading";

const ContentLayout = (props) => {
  const { children, title } = props;
  return (
    <>
      <Hading classname="px-4 pt-4 text-2xl font-semibold capitalize text-neutral-200">
        <span className="inline-block w-1 h-5 mr-2 rounded-md bg-neutral-200"></span>
        {title}
      </Hading>
      <main className="flex flex-col items-center justify-center px-4">
        <div className="grid grid-cols-3 gap-5 md:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center">
          {children}
        </div>
      </main>
    </>
  );
};

export default ContentLayout;
