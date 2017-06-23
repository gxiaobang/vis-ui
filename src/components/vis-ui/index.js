import Vue from 'vue';
import Icon from './icon';
import Spin from './spin';
import Button from './button';
import Input from './input';
import Form from './form';
import FormItem from './form-item';
import Select from './select';
import Option from './option';
import Table from './table';
import Dialog from './dialog';
import Pagination from './pagination';
import DatePicker from './date-picker';

const components = [
  Icon, Spin, Button, Input, Form, FormItem, Select, Option, Table, Dialog, Pagination,  DatePicker
];

console.log(DatePicker)

components.map(component => {
  Vue.component(component.name, component)
})

export default components;
