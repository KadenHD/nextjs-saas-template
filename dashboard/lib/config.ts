import "server-only";

const required = (name: string): string => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
}

interface IConfig {
    OPENINARY_API_KEY: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;

    SMTP_HOST: string;
    SMTP_PORT: number;
    SMTP_SECURE: boolean;
    SMTP_USER: string;
    SMTP_PASS: string;

    POSTGRES_USER_DB: string;
}

const config: IConfig = {
    OPENINARY_API_KEY: required("OPENINARY_API_KEY"),
    POSTGRES_USER: required("POSTGRES_USER"),
    POSTGRES_PASSWORD: required("POSTGRES_PASSWORD"),

    SMTP_HOST: required("SMTP_HOST"),
    SMTP_PORT: parseInt(required("SMTP_PORT"), 10),
    SMTP_SECURE: required("SMTP_SECURE") === "true",
    SMTP_USER: required("SMTP_USER"),
    SMTP_PASS: required("SMTP_PASS"),

    POSTGRES_USER_DB: required("POSTGRES_USER_DB"),
};

export default config;
