import { getProviders } from "next-auth/react";
import ProviderButton from "./_ui/provider-button";
import RegisterForm from "../register/register-form";

const SignInServer = async () => {
  const providers = await getProviders();

  const oauthproviders = Object.values(providers ?? []).filter(
    (provider) => provider.type === "oauth"
  );
  console.log("providers", providers);

  return (
    <div className="flex flex-col p-20 items-center">
      Вход в систему
      <RegisterForm type="login" />
      or
      {oauthproviders.map((provider) => {
        return <ProviderButton key={provider.id} provider={provider} />;
      })}
    </div>
  );
};

export default SignInServer;
