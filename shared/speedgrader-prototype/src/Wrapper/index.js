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

import React, { Component } from 'react'
import { View, Flex } from '@instructure/ui-layout'

import RightSide from '../RightSide'

class Wrapper extends Component {
  render () {
    return (
      <View
        as="main"
        margin="0"
        padding="0"
      >
        <Flex alignItems="start" height="100vh">
          <Flex.Item grow>
            <View
              background="light"
              padding="large"
              textAlign="center"
              minHeight="100vh"
              minWidth="75%"
              as="div"
              borderWidth="0 small 0 0"
              margin="0 x-small 0 0"
            >
              Docviewer
            </View>
          </Flex.Item>
          <Flex.Item width="20rem">
            <RightSide />
          </Flex.Item>
        </Flex>
      </View>
    )
  }
}

export default Wrapper
