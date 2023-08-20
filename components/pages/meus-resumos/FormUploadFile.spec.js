import { mount } from '@vue/test-utils'
import FormUploadFile from './FormUploadFile.vue'
import { expect, test, it } from "vitest";

it("should be first input", async () => {
  const wrapper = mount(FormUploadFile);
  expect(wrapper.text()).toContain('resumo')
});

it("should be upload file first", async () => {
  const wrapper = mount(FormUploadFile);
  expect(wrapper.text()).toContain('Faça upload do arquivo')
});

it("should be link when click in another option", async () => {
  const wrapper = mount(FormUploadFile);
  expect(wrapper.find("#link").exists()).toBe(false);
});

