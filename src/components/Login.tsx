import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Header from "./Header";
import { useToggleHeader } from "../state/ToggleHeader";
import { getGoogleAuthURL } from "../ts/loginUtils";

export const Login = () => {
  const { light } = useToggleHeader();

  const googleLogin = () => {
    const authUrl = getGoogleAuthURL();
    window.location.href = authUrl;
  };

  return (
    <div
      className={`"App" ${
        light ? "bg-card-light-blue" : "dark bg-card-dark-blue"
      } min-h-screen flex flex-col`}
    >
      <Header />
      <div className="relative flex flex-grow">
        <div className="flex flex-col items-center justify-center flex-1">
          <button
            className={`${
              light
                ? "bg-card-sky-blue border-black hover:bg-electric-blue"
                : "bg-black text-white hover:bg-charcoal-black"
            } border-[3px] rounded-[15px] border-radius: 15px w-[720px] h-[120px] py-2 px-12 mb-24 flex items-center justify-center`}
          >
            <FontAwesomeIcon
              icon={icon({ name: "github", style: "brands" })}
              className="mr-2 h-12"
            />
            <span className="flex-grow text-base">
              <p
                className={`${
                  light ? "text-duke-blue" : "text-white"
                } text-[48px] ml-2`}
              >
                Log In with Github
              </p>
            </span>
          </button>

          <button
            onClick={() => googleLogin()}
            className={`${
              light
                ? "bg-card-sky-blue border-black hover:bg-electric-blue"
                : "bg-black text-white hover:bg-charcoal-black"
            } border-[3px] rounded-[15px] w-[720px] h-[120px] py-2 px-12 mb-12 flex items-center justify-center`}
          >
            <FontAwesomeIcon
              icon={icon({ name: "google", style: "brands" })}
              className="mr-2 h-12"
            />
            <span className="flex-grow text-base">
              <p
                className={`${
                  light ? "text-duke-blue" : "text-white"
                } text-[48px] ml-2`}
              >
                Log In with Google
              </p>
            </span>
          </button>

          <div className="text-[24px] mb-10">
            <span
              className={`${
                light
                  ? "text-duke-blue hover:text-sapphire-blue"
                  : "text-white hover:text-suva-grey"
              }`}
            >
              Forgot Password?{" "}
            </span>
            <span className={`${light ? "text-duke-blue" : "text-white"}`}>
              |
            </span>
            <span
              className={`${
                light
                  ? "text-duke-blue hover:text-sapphire-blue"
                  : "text-white hover:text-suva-grey"
              }`}
            >
              {" "}
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
