import { LuBookText } from "react-icons/lu";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router";

function Header() {
  const navigation = useNavigate();
  const currentPath = useLocation();
  console.log();

  function handdleSettings() {
    navigation("/settings");
  }

  function handdleGoBack() {
    navigation("/search");
  }

  return (
    <div className="flex p-3 gap-2 items-center bg-headerBlue h-12">
      {/* <div className="flex gap-2 items center h-6"> */}
      <span className="">
        <LuBookText className=" text-white h-5 w-5 "></LuBookText>
      </span>
      <p className="text-white  text-lg h-full flex justify-center items-center rounded ">
        Meanings
      </p>
      {/* </div> */}
      <div className="ml-auto flex gap-2">
        {currentPath.pathname.match("meaning") && (
          <button
            className="hover:cursor-pointer"
            title="settings"
            onClick={handdleGoBack}
          >
            <TiArrowBackOutline className="text-white h-6 w-6" />
          </button>
        )}
        <button
          title="go back to search"
          className="hover:cursor-pointer"
          onClick={handdleSettings}
        >
          <IoSettingsOutline className="text-white h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Header;
