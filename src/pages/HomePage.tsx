import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { getFirstOptions, getSecondOptions } from "../api";
import {ETheme, IOptionWithLabel, IOptionWithName} from "../interfaces";
import { saveSettings } from "../utils";
import ShowError from "../components/ShowError";
import Button from "../components/Button";
import Select from "../components/Select";
import { INameForm } from "../hooks/useForm";
import { useForm } from "../hooks";
import { ThemeProvider } from "../context/theme";

const HomePage = () => {
  const [theme, setTheme] = useState<ETheme>(window.appSettings.theme);

  const [firstOptions, setFirstOptions] = useState<IOptionWithName[]>([]);
  const [selectedFirstOption, setSelectedFirstOption] =
    useState<IOptionWithName | null>(null);

  const [error, setError] = useState<string>("");

  const [secondOptions, setSecondOptions] = useState<IOptionWithLabel[]>([]);
  const [selectedSecondOption, setSelectedSecondOption] =
    useState<IOptionWithLabel | null>(null);

  const [nameForm, setName] = useForm<INameForm>({
    firstName: "",
    lastName: "",
  });

  const getOptions = async () => {
    try {
      const data = await getFirstOptions();
      setFirstOptions(data);
    } catch (error) {
      setError(String(error));
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const onChangeFirstOption = async (value: IOptionWithName | null) => {
    setSelectedFirstOption(value);
    if (value == null) {
      setSelectedSecondOption(null);
      setSecondOptions([]);
      return;
    }

    try {
      const data = await getSecondOptions({ id: value.id });
      setSecondOptions(data);
    } catch (error) {
      setError(String(error));
    }
  };

  const onChangeSecondOption = (value: IOptionWithLabel | null) => {
    setSelectedSecondOption(value);
  };

  const handleChangeNameForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setName(name as keyof INameForm, value);
  };

  const onHideError = () => {
    setError("");
    getOptions();
  };

  const saveForm = (e: FormEvent) => {
    e.preventDefault();
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === ETheme.Light ? ETheme.Dark : ETheme.Light;
      saveSettings("theme", next);
      return next;
    });
  };

  return (
    <ThemeProvider value={[theme, setTheme]}>
      <form>
        <div>
          Select first type:&nbsp;
          <Select
            options={firstOptions}
            selected={selectedFirstOption}
            onChange={onChangeFirstOption}
          />
        </div>
        {selectedFirstOption != null && (
          <div>
            Select second type:&nbsp;
            <Select
              labelKey="label"
              options={secondOptions}
              selected={selectedSecondOption}
              onChange={onChangeSecondOption}
            />
          </div>
        )}
        <br />
        <div>
          <div>
            First Name&nbsp;
            <input
              type="text"
              name="firstName"
              value={nameForm.firstName}
              onChange={handleChangeNameForm}
            />
          </div>
          <br />
          <div>
            Last Name&nbsp;
            <input
              type="text"
              name="lastName"
              value={nameForm.lastName}
              onChange={handleChangeNameForm}
            />
          </div>
        </div>
        <br />
        <Button variant="secondary" onClick={toggleTheme}>
          <span>Toggle them</span>
        </Button>
        &nbsp;
        <Button
          variant="secondary"
          onClick={saveForm}
          type="submit"
          disabled={error !== ""}
        >
          <span>Save form</span>
        </Button>
        <br />
        <ShowError delay={1000} show={error !== ""} onHide={onHideError}>
          <p>{error}</p>
        </ShowError>
      </form>
    </ThemeProvider>
  );
};

export default HomePage;
