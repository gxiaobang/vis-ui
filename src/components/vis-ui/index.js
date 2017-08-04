/**
 * 安装到Vue.component
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

const components = {
  Icon, Spin, Button, Input, InputNumber, Form, FormItem, FormItemGroup, Checkbox, CheckboxGroup, Select, Option, Toast, Table, Dialog, Pagination,  DatePicker, Textarea, Validate, Switch, Tabs
};

for (let key in components) {
  components[key].install(Vue);
}

export default components;
