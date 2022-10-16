import "./styles.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "all"
  });

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
    reset();
  };

  return (
    <div className="App">
      <h1>React Hook Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: {
                value: true,
                message: "поле обязательно к заполнению"
              },
              minLength: {
                value: 5,
                message: "Минимум 5 символов"
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>

        <label>
          First Name:
          <input
            {...register("lastName", {
              required: {
                value: true,
                message: "поле обязательно к заполнению"
              },
              minLength: {
                value: 5,
                message: "Минимум 5 символов"
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
