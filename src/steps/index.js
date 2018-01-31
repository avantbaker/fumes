import React, { Component } from 'react';

import MultiStep from 'react-native-multistep-wizard';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import Final from './Final';

const steps = [
    {name: 'LeftQuadrant', component: <Left />},
    {name: 'MiddleQuadrant', component: <Middle />},
    {name: 'RightQuadrant', component: <Right />},
    {name: 'FinalCalculation', component: <Final />},
];

export const oldform = <MultiStep steps={steps} onFinish={(form) => this.finish(form)} />;
