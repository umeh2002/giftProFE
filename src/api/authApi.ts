import axios from "axios";

const url: string = "http://localhost:3933/api";
export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${url}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyUser = async (token: string) => {
  try {
    return await axios
      .get(`${url}/${token}/verify-account`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const otpUser = async (token: any) => {
  try {
    return await axios.get(`${url}/${token}/first-verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const oneUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/${userID}/view-one`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const transactionHistory = async (userID: string) => {
  try {
    return await axios.get(`${url}/${userID}/get-history`).then((res: any) => {
      console.log(res.data.transactions)
      return res.data.transactions;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const creditCard = async (userID: string, data:any) => {
  try {
    return await axios.post(`${url}/${userID}/credit-wallet`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const debitCard = async (userID: string, data:any) => {
  try {
    return await axios.post(`${url}/${userID}/debit-wallet`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
