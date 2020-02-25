import React, { useState } from "react"
import validator from "validator"
import "../styles/Forms.css"
import { addUser } from "../actions/users.js"

export default props => {
  const [fname, setFname] = useState("")
  const [fnameError, setFnameError] = useState("")
  const [lname, setLname] = useState("")
  const [lnameError, setLnameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [website, setWebsite] = useState("")
  const [websiteError, setWebsiteError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (!validator.isAlpha(fname, "en-US")) {
      valid = false
      setFnameError("-- Cannot be blank, must contain letters only")
    } else {
      setFnameError("")
    }
    if (!validator.isAlpha(lname, "en-US")) {
      valid = false
      setLnameError("-- Cannot be blank, must contain letters only")
    } else {
      setLnameError("")
    }
    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("-- Cannot be blank, a valid email is required")
    } else {
      setEmailError("")
    }
    if (!validator.isAlphanumeric(username, "en-US")) {
      valid = false
      setUsernameError(
        "-- Cannot be blank, must contain letters and/or numbers only"
      )
    } else {
      setUsernameError("")
    }
    if (!validator.isAlphanumeric(password, "en-US")) {
      valid = false
      setPasswordError(
        "-- Cannot be blank, must contain letters and/or numbers only"
      )
    } else {
      setPasswordError("")
    }
    if (!validator.equals(confirmPassword, password)) {
      valid = false
      setConfirmPasswordError("-- Please re-enter, password must match exactly")
    } else {
      setConfirmPasswordError("")
    }
    if (!validator.isURL(website)) {
      valid = false
      setWebsiteError("-- Cannot be blank, must enter a valid url")
    } else {
      setWebsiteError("")
    }
    if (valid) {
      addUser({
        fname,
        lname,
        email,
        username,
        website
      }).then(() => {
        props.history.push("./thankyou")
      })
    }
  }

  return (
    <div>
      <header className="profileForm">
        <h1 className="profileHeader">Profile Form - All fields required</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className={fnameError ? "error" : ""} htmlFor="fname">
          First Name {fnameError && fnameError}
        </label>

        <input
          type="text"
          id="fname"
          className={fnameError ? "errorBox" : ""}
          placeholder="ex. John"
          value={fname}
          onChange={e => setFname(e.target.value)}
        />

        <label className={lnameError ? "error" : ""} htmlFor="lname">
          Last Name {lnameError && lnameError}
        </label>
        <input
          type="text"
          id="lname"
          className={lnameError ? "errorBox" : ""}
          placeholder="ex. Smith"
          value={lname}
          onChange={e => setLname(e.target.value)}
        />
        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          type="email"
          id="email"
          className={emailError ? "errorBox" : ""}
          placeholder="ex. john@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          type="text"
          id="username"
          className={usernameError ? "errorBox" : ""}
          placeholder="ex. myusername"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          type="password"
          id="password"
          className={passwordError ? "errorBox" : ""}
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label
          className={confirmPasswordError ? "error" : ""}
          htmlFor="confirmPassword"
        >
          Confirm Password {confirmPasswordError && confirmPasswordError}
        </label>
        <input
          type="password"
          id="confirmPassword"
          className={confirmPasswordError ? "errorBox" : ""}
          placeholder="confirm password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <label className={websiteError ? "error" : ""} htmlFor="website">
          Website {websiteError && websiteError}
        </label>
        <input
          type="url"
          id="website"
          className={websiteError ? "errorBox" : ""}
          placeholder="Website - Please enter a valid url"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
