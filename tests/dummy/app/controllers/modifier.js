import Controller from '@ember/controller';
import { set, action } from '@ember/object';

export default class ModifierController extends Controller {
  shouldShowInput = false;

  @action
  showInput() {
    set(this, 'shouldShowInput', true);
  }

  @action
  hideInput() {
    set(this, 'shouldShowInput', false);
  }
}
