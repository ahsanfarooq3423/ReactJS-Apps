import React from 'react';
import "antd/dist/antd.css";
import { Skeleton, List, Avatar, Icon } from 'antd';
import classes from './ScreenCart.module.css';
import { connect } from 'react-redux';


const listData = [];
for (let i = 0; i < 9; i++) {
  listData.push({
    href: 'http://ant.design',
    username: 'Ali Hamza',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    date:
      '2 Days Ago',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span className={classes.icon}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ScreenCard extends React.Component {
  state = {
    loading: false,
    listData: []
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  componentDidMount() {
    if (this.props.screens.length === 0) {
      this.setState({ loading: true })
    }
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.listData === this.state.listData) {
      const listData = this.props.screens.map(screen => {
        return {
          href: '#',
          username: screen.userName,
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
          date: screen.dateSeconds,
          content: screen.screenContent
        }
      })
      this.setState({ listData, loading : false })
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {/* <Switch checked={!loading} onChange={this.onChange} /> */}
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.state.listData}
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
                  avatar={<Avatar className={classes.avatar} src={item.avatar} />}
                  title={<a href={item.href}>{item.username}</a>}
                  description={item.date}
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

const mapStateToProps = state => {
  return {
    screens: state.screensState.screens
  }
}


export default connect(mapStateToProps)(ScreenCard);