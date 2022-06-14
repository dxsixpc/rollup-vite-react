import React from 'react';
import { Typography } from 'antd';
import type { TitleProps } from 'antd/lib/typography/Title';
import { Wrapper } from './Styled';

export interface TitleWidgetProps extends TitleProps {
  title: string;
  styled?: string;
}

/**
 * @name 标题展示
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param title 标题
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */
const TextWidget: React.FC<TitleWidgetProps> = (props) => {
  const { title, styled, ...rest } = props;
  return (
    <Wrapper>
      <Typography.Title {...rest}>{title}</Typography.Title>
    </Wrapper>
  );
};

export default TextWidget;