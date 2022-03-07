import React, { Component, forwardRef } from 'react';
import { axiosClient } from '../../common/js/axios';
import styled from 'styled-components';
import {
  Drawer,
  Tooltip,
  Button,
  Form,
  Radio,
  Switch,
  Row,
  Col,
  Select,
  message,
  Spin,
} from 'antd';
import { connect } from 'react-redux';
import { getRecords, getProblems } from '../../store';
import iconGreen from '../../assets/img/submit_green.png';
import iconWhite from '../../assets/img/submit_white.png';
import moment from 'moment';
import { themeColor } from '../../common/css/constant';
import cx from 'classname';

const Body = styled.div``;

const Icon = styled.div`
  position: fixed;
  right: 25px;
  transform: translateY(-80%);
  top: 20%;
  padding: 10px;
  border-radius: 40px;
  border: 2px solid ${themeColor};
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  .record-icon {
    width: 30px;
    transition: all 0.4s ease-in-out;
  }
  &.hover-icon {
    background: ${themeColor};
  }
`;

const { Option } = Select;

class AddRecordWrap extends React.Component {
  state = {
    loading: false,
    hover: false,
    visible: false,
    disableSelect: false,
    switchCheck: true,
    language: 'javascript',
    selectedPro: '',
  };

  componentDidMount() {
    this.fetchProblems();
  }

  fetchProblems = async () => {
    const ret = await axiosClient({
      method: 'GET',
      url: '/api/get_problems',
    });

    if (ret.code === 0) {
      this.props.getProblems(ret.data);
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ loading: true }, () => {
          this.submitRecord();
        });
      }
    });
  }

  submitRecord = async () => {
    const timestamp = new Date().getTime();

    const params = {
      username: 'suncihai@gmail.com',
      problems: this.state.selectedPro,
      timestamp,
      language: this.state.language,
      success: this.state.switchCheck,
    };
    const ret = await axiosClient({
      method: 'GET',
      url: '/api/submit_record',
      params: params,
    });

    if (ret.code === 0) {
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
        message.success('添加刷题记录成功！');
        this.props.updateRecords();
      }, 1000);
    }
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onChange = (e) => {
    if (e.length <= 4) {
      this.setState(
        {
          switches: e.length,
          disableSelect: false,
          selectedPro: this.filterProblems(e).join('-'),
        },
        () => {}
      );
    } else {
      this.setState({
        switches: e.length,
        disableSelect: true,
      });
    }
  };

  radioChange = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  switchChange = (checked) => {
    this.setState({ switchCheck: checked });
  };

  filterProblems = (arr) => {
    return arr.map((ele) => ele.split('-')[0]);
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { loading, hover, visible, disableSelect, switchCheck, language } =
      this.state;
    const icon = hover ? iconWhite : iconGreen;
    const iconStyle = cx({
      'hover-icon': hover,
    });
    const { getFieldDecorator } = this.props.form;
    const { problems } = this.props;

    return (
      <Body>
        <Icon className={iconStyle}>
          <img
            className="record-icon"
            onMouseOver={() => {
              this.setState({ hover: true });
            }}
            onMouseLeave={() => {
              this.setState({ hover: false });
            }}
            onClick={this.showDrawer}
            src={icon}
          />
        </Icon>
        <Drawer
          title="Create a new record"
          width={450}
          onClose={this.onClose}
          visible={visible}
        >
          <Form
            layout="vertical"
            hideRequiredMark
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <Row gutter={16}>
              <Spin spinning={loading}>
                <Col span={24}>
                  <Form.Item label="Problem">
                    {getFieldDecorator('problem', {
                      rules: [
                        {
                          required: true,
                          message: 'Please select at lease one problem',
                        },
                      ],
                    })(
                      <SelectWrapper
                        onChange={this.onChange}
                        problems={problems}
                        disableSelect={disableSelect}
                      />
                    )}
                  </Form.Item>
                  <Form.Item label="Pass or Fail">
                    <Switch defaultChecked onChange={this.switchChange} />
                  </Form.Item>
                  <Form.Item label="Language">
                    <Radio.Group onChange={this.radioChange} value={language}>
                      <Radio value="javascript">Javascript</Radio>
                      <Radio value="java">Java</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Spin>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={(e) => this.handleSubmit(e)} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </Body>
    );
  }
}

const SelectWrapper = forwardRef((props, ref) => {
  if (!props.disableSelect) {
    return (
      <Select
        mode="multiple"
        size="large"
        onChange={props.onChange}
        ref={ref}
        placeholder="Please select at lease one problem"
      >
        {props.problems.map((item, index) => {
          let v = `${item.number}-${item.name}`;
          return (
            <Option key={item.name} value={v}>
              <span>{v}</span>
            </Option>
          );
        })}
      </Select>
    );
  } else {
    return (
      <Select
        mode="multiple"
        size="large"
        ref={ref}
        onChange={props.onChange}
        placeholder="Please select at lease one problem"
      >
        <Option key="000" value="000" disabled>
          <span>You may at least select five problems!</span>
        </Option>
      </Select>
    );
  }
});

const mapDispatchToProps = { getRecords, getProblems };
const mapStateToProps = ({ problems }) => ({ problems });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(AddRecordWrap));
