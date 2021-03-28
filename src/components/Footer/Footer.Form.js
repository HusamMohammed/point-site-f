import React from "react"

import Logo from "../shared/Logo"
import {
  FormWrapper,
  Wrapper,
  FooterLogo,
  FooterFormText,
  Form,
  EmailInput,
  SubmitButton,
} from "./styles"

const FooterForm = ({ ltr }) => {
  return (
    <FormWrapper>
      <Wrapper
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <FooterLogo>
          <Logo />
        </FooterLogo>
        <FooterFormText
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {ltr
            ? "We are very passionate about hard work to achieve happy endings and change."
            : "نحن شغوفون دائماً بالعمل الدؤوب لتحقيق النهايات السعيدة، وإحداث التغيير."}
        </FooterFormText>
      </Wrapper>
      <Form
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <EmailInput
          placeholder={
            ltr ? "Enter your email address" : "ادخل بريدك الالكتروني"
          }
          ltr={ltr}
        />
        <SubmitButton ltr={ltr}>{ltr ? "Send" : "ارسل"}</SubmitButton>
      </Form>
    </FormWrapper>
  )
}

export default FooterForm
