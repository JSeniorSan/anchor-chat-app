import { getProviders } from "next-auth/react";
import ProviderButton from "./_ui/provider-button";
import SignInCredentialsForm from "./_ui/auth-credentials-form";

const SignInServer = async () => {
  const providers = await getProviders();

  const oauthproviders = Object.values(providers ?? []).filter(
    (provider) => provider.type === "oauth"
  );

  return (
    <div className="flex flex-col p-20 items-center">
      Вход в систему
      <SignInCredentialsForm />
      or
      {oauthproviders.map((provider) => {
        return <ProviderButton key={provider.id} provider={provider} />;
      })}
    </div>
  );
};

export default SignInServer;
