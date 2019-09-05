/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


//  TODO: if certain button is selected it needs to switch from 'circle-default' to
//  circle-primary (this does not match the mock-up but the closest thing we currently
//  have in instui). Based on which button is selected the rubric Description and
//  rubricSummary need to switch out ... this functionality is really a radio button
//  How to make it look right but be the correct pieces under the hood?

import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@instructure/ui-layout'
import { Text } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'

export default class RubricCriteria extends React.Component {
  static propTypes = {
    rubricValue: PropTypes.number.isRequired,
    rubricDescription: PropTypes.string.isRequired,
    rubricSummary: PropTypes.string.isRequired
  }

  render() {
    const {
      rubricValue,
      rubricDescription,
      rubricSummary
    } = this.props

    return (
      <div>
        <Flex padding="small 0">
          <Flex.Item align="start">
            <Button
              variant="circle-default"
              margin="0 small 0 0"
            >
              {rubricValue}
            </Button>
          </Flex.Item>
          <Flex.Item shrink grow>
            <Text as="div">
              <Text weight="bold" as="div">{rubricDescription}</Text>
              {rubricSummary}
            </Text>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
