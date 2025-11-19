import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Button } from "./button";
import { Input } from "./input";
import { mapRawSystems, savePortalData } from "../../lib/utils";
import type { ApiResponse, RawSystem, ClientInfo } from "../../types";

interface Login1Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  onLoginSuccess?: () => void;
}

const Login1 = ({
  heading,
  logo = {
    url: "https://www.aixpt.com",
    src: "/logoW.png",
    alt: "AIXPT Logo",
    title: "AIXPT Portal",
  },
  buttonText = "Se connecter",
  googleText = "S'inscrire avec Google",
  signupText = "Vous n'avez pas de compte ?",
  signupUrl = "#",
  onLoginSuccess,
}: Login1Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const webhookUrl = import.meta.env.VITE_LOGIN_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error('Login webhook URL is not configured');
      }
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data: ApiResponse = await response.json();

      if (data.status === "YES" && data.token) {
        localStorage.setItem("portal-token", data.token);

        const rawSystems = data.systems || [];
        const firstRawSystem = rawSystems[0] || {} as RawSystem;
        const clientInfo: ClientInfo = {
          name: (firstRawSystem['9'] as string) || '',
          clientId: (firstRawSystem['0'] as string) || '',
        };
        const mappedSystems = mapRawSystems(rawSystems);

        if (mappedSystems.length > 0) {
          savePortalData(clientInfo, mappedSystems);
        } else {
          localStorage.removeItem('portal-client-info');
          localStorage.removeItem('portal-systems');
          setError('Connexion réussie, mais aucun système configuré.');
        }

        onLoginSuccess?.();
        navigate("/dashboard");
      } else {
        setError(data.message || "Échec d'authentification. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Erreur réseau. Veuillez vérifier votre connexion et réessayer.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <section className="bg-muted bg-background h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border px-6 py-12 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10 dark:invert"
                />
              </a>
            </div>
            {heading && <h1 className="text-3xl font-semibold">{heading}</h1>}
          </div>

          {/* Error Banner */}
          {error && (
            <div className="w-full p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-400 text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" className="mt-2 w-full" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Connexion en cours...
                    </div>
                  ) : (
                    buttonText
                  )}
                </Button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export { Login1 };