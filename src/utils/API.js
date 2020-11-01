/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// limit to 50 employees
const EMPURL = "https://randomuser.me/api/?results=50&nat=us";

export default {
  getRandomEmployees: () => axios.get(EMPURL)
};

// ESLint... https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-anonymous-default-export.md