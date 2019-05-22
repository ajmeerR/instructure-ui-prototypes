import React from "react";
import PropTypes from "prop-types";
import { View, Flex } from "@instructure/ui-layout";
import { Heading, List, Link } from "@instructure/ui-elements";
import { Button } from "@instructure/ui-buttons";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import {
  IconMoveEndLine,
  IconCommonsLine,
  IconAnalyticsLine,
  IconAnnouncementLine,
  IconCalendarDayLine,
  IconLockLine,
  IconTrashLine
} from "@instructure/ui-icons";
import "./styles.css";

export default class ActionTray extends React.Component {
  static propTypes = {
    onRequestHideActions: PropTypes.func
  };
  static defaultProps = {
    onRequestHideActions: () => {}
  };
  handleActionsClose = () => {
    this.props.onRequestHideActions();
  };
  render() {
    return (
      <View
        as="div"
        height="100%"
        width="16em"
        padding="small medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 medium 0">
          <Flex.Item grow>
            <Heading level="h4">Actions</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconMoveEndLine}
              onClick={this.handleActionsClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <List variant="unstyled">
          <List.Item>
            <View display="block" borderWidth="0 0 small 0" padding="small 0">
              <Link icon={IconCommonsLine} href="#">
                Share to Commons
              </Link>
            </View>
          </List.Item>
          <List.Item>
            <View display="block" borderWidth="0 0 small 0" padding="small 0">
              <Link icon={IconAnnouncementLine} href="#">
                Student View
              </Link>
            </View>
          </List.Item>
          <List.Item>
            <View display="block" borderWidth="0 0 small 0" padding="small 0">
              <Link icon={IconAnalyticsLine} href="#">
                Course Statistics
              </Link>
            </View>
          </List.Item>
          <List.Item>
            <View display="block" borderWidth="0 0 small 0" padding="small 0">
              <Link icon={IconCalendarDayLine} href="#">
                Course Calendar
              </Link>
            </View>
          </List.Item>
          <List.Item>
            <View display="block" borderWidth="0 0 small 0" padding="small 0">
              <Link icon={IconLockLine} href="#">
                Conclude this Course
              </Link>
            </View>
          </List.Item>
          <List.Item>
            <View display="block" borderWidth="0 0 small 0" padding="small 0">
              <Link icon={IconTrashLine} href="#">
                Delete this Course
              </Link>
            </View>
          </List.Item>
        </List>
      </View>
    );
  }
}
