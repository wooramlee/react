import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../components/hooks/useinput'

const Buttonwrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId ] = useInput('');
  const [password, onChangePassword ] = useInput('');

  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');

  // const onChangeId = useCallback((e)=> {
  //   setId(e.target.value);
  // }, [ ]);

  // const onChangePassword = useCallback((e)=> {
  //   setPassword(e.target.value);
  // }, [ ]);

  //rerendering 최적화
  //const style = uswMemo(() => ({ marginTop : 10 }), []);

  // <Form onFinish = {onSubmitForm} 할 때 antd 는 이미 preventDefault 적용되어있음. 따라서 아래꺼 쓰면 안됨
  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  // }

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return(
    <FormWrapper onFinish = { onSubmitForm }>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input 
          name="user-password" 
          type="password"
          value={password} 
          onChange={onChangePassword} 
          required 
        />
      </div>
      <Buttonwrapper >
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </Buttonwrapper >
    </FormWrapper>
  );
}

LoginForm.propTypes = {} 

export default LoginForm;