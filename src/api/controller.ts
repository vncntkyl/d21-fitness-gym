import { api } from "./config";

export const getAll = async <ResponseType>(resource: string) => {
  const response = await api.get<ResponseType>("index", {
    params: {
      resource: resource,
    },
  });
  return response.data;
};

export const getOne = async <ResponseType>(resource: string, id: number) => {
  const response = await api.get<ResponseType>("index", {
    params: {
      resource: resource,
      id: id,
    },
  });
  return response.data;
};

export const add = async <ResponseType, Data>(resource: string, data: Data) => {
  const formdata = new FormData();
  formdata.append("data", JSON.stringify(data));

  const response = await api.post<ResponseType>("index", formdata, {
    params: {
      resource: resource,
    },
  });
  return response.data;
};

export const edit = async <ResponseType, Data>(
  resource: string,
  columns: string[],
  data: Data[keyof Data][],
  id: number
) => {
  const response = await api.put<ResponseType>(
    "index",
    {
      id: id,
      data: data,
      columns: columns,
    },
    {
      params: {
        resource: resource,
      },
    }
  );
  return response.data;
};

export const remove = async <ResponseType>(resource: string, id: number) => {
  const response = await api.delete<ResponseType>("index", {
    params: {
      id: id,
      resource: resource,
    },
  });
  return response.data;
};
