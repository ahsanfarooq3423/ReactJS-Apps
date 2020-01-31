import React from 'react';
import "antd/dist/antd.css";
import { Skeleton, Switch, List, Avatar, Icon } from 'antd';
import classes from './ScreenCart.module.css';

const listData = [];
for (let i = 0; i < 9; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span className = {classes.icon}>
    <Icon type={type} style={{ marginRight: 8}} />
    {text}
  </span>
);

class ScreenCard extends React.Component {
  state = {
    loading: false,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        {/* <Switch checked={!loading} onChange={this.onChange} /> */}

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !loading && [
                  <IconText type="star-o" text="156" key="skeleton-star-o" />,
                  <IconText type="container" text="5 Comments" key="skeleton-like-o" />,
                  <IconText type="arrows-alt" key="skeleton-message" />,
                ]
              }>
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar className = {classes.avatar} src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ScreenCard;