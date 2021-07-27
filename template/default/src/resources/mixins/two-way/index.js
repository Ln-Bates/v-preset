import {
  get as _get,
  set as _set
} from 'lodash/object';

export default {
  model: {
    prop: 'currentVal',
    event: 'valChange'
  },
  props: ['currentVal', 'path'],
  computed: {
    val: {
      get() {
        const current = this.currentVal;
        return this.path ?
          _get(current, this.path) :
          current;
      },
      set(val) {
        let v = val;
        if (this.path) {
          _set(this.currentVal, this.path, val);
          v = this.currentVal;
        }
        this.$emit('valChange', v);
      }
    }
  }
};
