import uuid4 from 'uuid/v4';
import moment from 'moment';

export interface InputTodo {
  title: string;
  note: string;
  duedate?: any;
  where?: string;
}

export interface generatedTodo {
  [key: string]: Todo;
}

export interface Todo {
  t: number;
  e: string;
  p: TodoData;
}

export interface TodoData {
  acrd: null;
  ar: any;
  cd: number;
  dd: null;
  dl: any;
  do: number;
  icc: number;
  icp: boolean;
  icsd: null;
  ix: number;
  md: number;
  nt: string | null;
  pr: any;
  rr: null;
  rt: any;
  sp: null;
  sr: number | null;
  ss: number;
  st: number;
  tg: any;
  ti: number;
  tp: number;
  tr: boolean;
  tt: string;
}

export const generateTodo = async (todo: InputTodo): Promise<generatedTodo> => {
  const title = todo['title'] || 'New todo';
  const duedate = todo['duedate'] || null;
  let note = todo['note'] || null;
  const destination = todo['where'] || 'inbox';
  const uid = uuid4().toUpperCase();
  const now = Date.now() / 1000;
  let st;
  let sr;
  if (destination == 'today') {
    st = 2;
  } else if (destination == 'inbox') {
    st = 0;
  } else {
    st = 0;
  }
  // else {
  //   // return "Unsupported destination '" + destination + "'.";
  // }
  if (st == 2) {
    sr = moment(moment(new Date()).format('YYYY-MM-DD')).unix();
  } else {
    sr = null;
  }
  if (note != null) {
    note = '<note xml:space="preserve">' + note + '</note>';
  }
  const item: generatedTodo = {};
  item[uid] = {
    t: 0,
    e: 'Task2',
    p: {
      acrd: null,
      ar: [],
      cd: now,
      dd: duedate,
      dl: [],
      do: 0,
      icc: 0,
      icp: false,
      icsd: null,
      ix: 0,
      md: now,
      nt: note,
      pr: [],
      rr: null,
      rt: [],
      sp: null,
      sr: sr,
      ss: 0,
      st: st,
      tg: [],
      ti: 0,
      tp: 0,
      tr: false,
      tt: title,
    },
  };
  return item;
};
