import React from "react";
import PropTypes from "prop-types";
import { View, Flex, Responsive } from "@instructure/ui-layout";
import { ToggleGroup } from "@instructure/ui-toggle-details";
import { Breadcrumb } from "@instructure/ui-breadcrumb";
import { Heading, Pill, TruncateText } from "@instructure/ui-elements";
import { Button } from "@instructure/ui-buttons";
import { ScreenReaderContent } from "@instructure/ui-a11y";
import {
  IconExportLine,
  IconAddLine,
  IconCompleteSolid,
  IconEyeLine,
  IconHamburgerLine,
  IconMoveStartLine
} from "@instructure/ui-icons";

import SettingsMenu from "./SettingsMenu";
import Modules from "./Modules";
import "./styles.css";

// note: the magic number 948 is the max width the content itself should ever grow to
export default class MainContent extends React.Component {
  static propTypes = {
    onRequestShowCourseNav: PropTypes.func,
    onRequestShowActions: PropTypes.func,
    onRequestShowBurgerBtn: PropTypes.bool,
    onRequestShowActionsBtn: PropTypes.bool
  };
  static defaultProps = {
    onRequestShowCourseNav: () => {},
    onRequestShowActions: () => {},
    onRequestShowBurgerBtn: true,
    onRequestShowActionsBtn: true
  };
  handleBurgerClick = () => {
    this.props.onRequestShowCourseNav();
  };
  handleActionClick = () => {
    this.props.onRequestShowActions();
  };
  componentDidMount(prevProps, prevState) {
    this._input.focus();
  }
  render() {
    return (
      <View as="div">
        <View
          as="div"
          margin="0 medium"
          padding="small 0"
          borderWidth="0 0 small 0"
          minHeight="4rem"
        >
          <Flex>
            {this.props.onRequestShowBurgerBtn ? (
              <Flex.Item padding="0 medium 0 0">
                <Button
                  variant="icon"
                  icon={IconHamburgerLine}
                  onClick={this.handleBurgerClick}
                  autoFocus={true}
                  ref={c => (this._input = c)}
                >
                  <ScreenReaderContent>Open Course Nav</ScreenReaderContent>
                </Button>
              </Flex.Item>
            ) : null}
            <Flex.Item grow shrink padding="0">
              <Breadcrumb label="You are here:">
                <Breadcrumb.Link href="https://instructure.github.io/instructure-ui/">
                  English 204
                </Breadcrumb.Link>
                <Breadcrumb.Link>Assignments</Breadcrumb.Link>
              </Breadcrumb>
            </Flex.Item>
            {this.props.onRequestShowActionsBtn ? (
              <Flex.Item>
                <Button
                  variant="icon"
                  icon={IconMoveStartLine}
                  onClick={this.handleActionClick}
                  autoFocus={true}
                  ref={c => (this._input = c)}
                >
                  <ScreenReaderContent>Open Action Tray</ScreenReaderContent>
                </Button>
              </Flex.Item>
            ) : null}
          </Flex>
        </View>
        <View as="div" margin="small auto" padding="0 medium" maxWidth="948px">
          <Responsive
            query={{
              narrow: { maxWidth: 479 },
              wide: { minWidth: 480 }
            }}
          >
            {(props, matches) => {
              if (matches.includes('wide')) {
                return (
                  <Flex justifyItems="end" margin="medium 0 small 0" wrapItems>
                    <Flex.Item margin="0 x-small x-small 0">
                      <Button icon={<IconEyeLine title="View" />}>Progress</Button>
                    </Flex.Item>
                    <Flex.Item margin="0 x-small x-small 0">
                      <Button icon={<IconExportLine title="Export" />}>Course</Button>
                    </Flex.Item>
                    <Flex.Item margin="0 0 x-small 0">
                      <Button variant="primary" icon={<IconAddLine title="Add" />}>
                        Module
                      </Button>
                    </Flex.Item>
                  </Flex>
                )
              } else {
                return (
                  <Flex justifyItems="end" margin="medium 0 small 0" wrapItems>
                    <Flex.Item margin="0 x-small x-small 0">
                      <Button icon={IconEyeLine}>
                        <ScreenReaderContent>View Progress</ScreenReaderContent>
                      </Button>
                    </Flex.Item>
                    <Flex.Item margin="0 x-small x-small 0">
                      <Button icon={IconExportLine}>
                        <ScreenReaderContent>Export Course</ScreenReaderContent>
                      </Button>
                    </Flex.Item>
                    <Flex.Item margin="0 0 x-small 0">
                      <Button variant="primary" icon={IconAddLine}>
                        <ScreenReaderContent>Add Module</ScreenReaderContent>
                      </Button>
                    </Flex.Item>
                  </Flex> 
                )
              }
            }}
          </Responsive>

          <ToggleGroup
            toggleLabel="Expand Week 1 Modules"
            summary={
              <Flex wrapItems>
                <Flex.Item padding="0 medium 0 0" grow shrink>
                  <Heading level="h4">
                    <TruncateText>Week 1: Introduction to Help</TruncateText>
                  </Heading>
                </Flex.Item>
                <Flex.Item padding="0 medium 0 0" shrink>
                  <Pill text="Complete All Items" />
                </Flex.Item>
                <Flex.Item padding="0 medium 0 0" shrink>
                  <IconCompleteSolid color="success" />
                </Flex.Item>
                <Flex.Item padding="0 x-small 0 0" shrink>
                  <IconAddLine />
                </Flex.Item>
                <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
              </Flex>
            }
            defaultExpanded
          >
            <View display="block">{Modules()}</View>
          </ToggleGroup>
        </View>
      </View>
    );
  }
}
