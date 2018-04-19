/**
 * 组件全局注册
 */

import Vue from 'vue';
import Icon from './icon';
import Spin from './spin';
import Button from './button';
import Input from './input';
import InputNumber from './input-number';
import Form from './form';
import FormItem from './form-item';
import FormItemGroup from './form-item-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Select from './select';
import Option from './option';
import Toast from './toast';
import Table from './table';
import Dialog from './dialog';
import Pagination from './pagination';
import DatePicker from './date-picker';
import Textarea from './textarea';
import Validate from './validate';
import Switch from './switch';
import Tabs from './tabs';
import TabPane from './tab-pane';

const components = {
  Icon, Spin, Button, Input, InputNumber, Form, FormItem, FormItemGroup, Checkbox, CheckboxGroup, Select, Option, Toast, Table, Dialog, Pagination, DatePicker, Textarea, Validate, Switch, Tabs, TabPane
};

for (let name in components) {
  Vue.use(components[ name ]);
}

export default components;
