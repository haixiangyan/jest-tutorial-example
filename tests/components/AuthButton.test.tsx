import React from 'react';
import {render, screen} from '@testing-library/react'
import AuthButton from "../../src/components/AuthButton";

describe('AuthButton', () => {
  it('可以正确展示 children', () => {
    render(<AuthButton authType="user">你好</AuthButton>)

    expect(screen.getByText('普通用户你好')).toBeInTheDocument();
  })
})
