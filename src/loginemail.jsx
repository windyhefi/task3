export const Login = () => 
  
{currentemail === null && (
    <div className="container">
      <h2 className="heading">{'Login'}</h2>
      <Divider />
      <div className="form_wrapper">
        <Input
          value={email}
          onChange={(event) => setemail(event.target.value)}
          placeholder="Username"
          size="large"
          className="form_input"
        />
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          size="large"
          type="password"
          className="form_input"
        />
      </div>
      <div className="form_buttons">
        <Button
          onClick={() => LogIn()}
          type="primary"
          className="form_button"
          color={'#208AEC'}
          size="large"
          block
        >
          Log In
        </Button>
      </div>
      <Divider />
     
  {currentUser !== null &&
    (<div className="container">
      <h2 className="heading">{'email'}</h2>
      <Divider />
      <h2 className="heading">{`Hello ${currentemail.get('email')}!`}</h2>
      <div className="form_buttons">
        <Button
          onClick={() => {}}
          type="primary"
          className="form_button"
          color={'#208AEC'}
          size="large"
        >
          Log Out
        </Button>
      </div>
    </div>)
  }
</div>
)
}