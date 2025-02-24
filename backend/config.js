import dotenv from "dotenv";

const JWT_USERPASSWORD = process.env.JWT_USERPASSWORD;
const JWT_ADMINKEY = process.env.JWT_ADMINKEY;
const STRIPE_SECCRET = "sk_test_51QuYojCohns11cRij7AqbgsJ6Ssnuez2ezMq0xNTNSKbl0AWUhSuDoTuRKl65ch1y8EL01IcC2dcSEU5MOYudBus00rDM6DoCF"

export default { JWT_USERPASSWORD, JWT_ADMINKEY, STRIPE_SECCRET };
