import Vue from 'vue';
import Button from './button';
import Input from './input';
import Form from './form';
import FormItem from './form-item';
import Select from './select';
import Option from './option';
import Table from './table';
import Dialog from './dialog';
import Pagination from './pagination';
import Icon from './icon';
import Spin from './spin';

const components = [
  Button, Input, Form, FormItem, Select, Option, Table, Dialog, Pagination, Icon, Spin
];

components.map(component => {
  Vue.component(component.name, component)
})

export default components;
