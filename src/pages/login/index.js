export default function LoginPage() {
  return (
    <div className="loginPage">
      <form>
        <h1>Login</h1>
        <label className="formLabel">
          <input className="input" placeholder="email"></input>

          <input className="input" placeholder="password"></input>
        </label>
      </form>
    </div>
  );
}
