/* EStree */

export interface _Node<T extends string> {
  type: T;
  loc?: SourceLocation | null;
  start?: number;
  end?: number;
}

export interface T_Node extends T_Statement, T_Expression, T_Pattern, T_ModuleDeclaration, T_ModuleSpecifier {
  Program: Program;
  SwitchCase: SwitchCase;
  CatchClause: CatchClause;
  Property: Property | AssignmentProperty;
  Super: Super;
  SpreadElement: SpreadElement;
  TemplateElement: TemplateElement;
  ClassBody: ClassBody;
  FieldDefinition: FieldDefinition;
  PrivateName: PrivateName;
  MethodDefinition: MethodDefinition;
  VariableDeclarator: VariableDeclarator;
}

export type Node =
  | Program
  | SwitchCase
  | CatchClause
  | Statement
  | Expression
  | Property
  | AssignmentProperty
  | Super
  | SpreadElement
  | TemplateElement
  | ClassBody
  | FieldDefinition
  | PrivateName
  | MethodDefinition
  | ModuleDeclaration
  | ModuleSpecifier
  | Pattern
  | VariableDeclarator;

export interface _Statement<T extends string> extends _Node<T> {}

export interface T_Statement extends T_Declaration {
  ExpressionStatement: ExpressionStatement;
  BlockStatement: BlockStatement;
  EmptyStatement: EmptyStatement;
  DebuggerStatement: DebuggerStatement;
  WithStatement: WithStatement;
  ReturnStatement: ReturnStatement;
  LabeledStatement: LabeledStatement;
  BreakStatement: BreakStatement;
  ContinueStatement: ContinueStatement;
  IfStatement: IfStatement;
  SwitchStatement: SwitchStatement;
  ThrowStatement: ThrowStatement;
  TryStatement: TryStatement;
  WhileStatement: WhileStatement;
  DoWhileStatement: DoWhileStatement;
  ForStatement: ForStatement;
  ForInStatement: ForInStatement;
  ForOfStatement: ForOfStatement;
}
export type LiteralExpression = BigIntLiteral | Literal | TemplateLiteral;
export type ObjectLiteralElementLike = MethodDefinition | Property | SpreadElement;
export type Parameter = AssignmentPattern | RestElement | ArrayPattern | ObjectPattern | Identifier;
export type DestructuringPattern =
  | Identifier
  | ObjectPattern
  | ArrayPattern
  | RestElement
  | AssignmentPattern
  | MemberExpression;
export type PrimaryExpression =
  | ArrayExpression
  | ArrayPattern
  | ClassExpression
  | FunctionExpression
  | Identifier
  | Import
  | Literal
  | LiteralExpression
  | MetaProperty
  | ObjectExpression
  | ObjectPattern
  | Super
  | TemplateLiteral
  | ThisExpression;
export type PropertyName = Expression;
export type Statement =
  | ExpressionStatement
  | BlockStatement
  | EmptyStatement
  | DebuggerStatement
  | WithStatement
  | ReturnStatement
  | LabeledStatement
  | BreakStatement
  | ContinueStatement
  | IfStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | WhileStatement
  | DoWhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | Declaration;

export interface _Expression<T extends string> extends _Node<T> {}
export interface T_Expression {
  Identifier: Identifier;
  Literal: Literal | RegExpLiteral | BigIntLiteral;
  BigIntLiteral: Literal;
  ThisExpression: ThisExpression;
  ArrayExpression: ArrayExpression;
  ObjectExpression: ObjectExpression;
  FunctionExpression: FunctionExpression;
  UnaryExpression: UnaryExpression;
  UpdateExpression: UpdateExpression;
  BinaryExpression: BinaryExpression;
  AssignmentExpression: AssignmentExpression;
  LogicalExpression: LogicalExpression;
  MemberExpression: MemberExpression;
  ConditionalExpression: ConditionalExpression;
  CallExpression: CallExpression;
  NewExpression: NewExpression;
  Import: Import;
  SequenceExpression: SequenceExpression;
  ArrowFunctionExpression: ArrowFunctionExpression;
  YieldExpression: YieldExpression;
  TemplateLiteral: TemplateLiteral;
  TaggedTemplateExpression: TaggedTemplateExpression;
  ClassExpression: ClassExpression;
  MetaProperty: MetaProperty;
  AwaitExpression: AwaitExpression;
}
export type BindingPattern = ArrayPattern | ObjectPattern;
export type BindingName = BindingPattern | Identifier;
export type ClassElement = FunctionExpression | MethodDefinition;
export type ExportDeclaration = ClassDeclaration | ClassExpression | FunctionDeclaration | VariableDeclaration;
export type Expression =
  | Identifier
  | Literal
  | BigIntLiteral
  | RegExpLiteral
  | ThisExpression
  | ArrayExpression
  | ObjectExpression
  | FunctionExpression
  | DoExpression
  | UnaryExpression
  | UpdateExpression
  | BinaryExpression
  | AssignmentExpression
  | LogicalExpression
  | MemberExpression
  | PrivateName
  | ConditionalExpression
  | CallExpression
  | NewExpression
  | SequenceExpression
  | Import
  | ArrowFunctionExpression
  | YieldExpression
  | TemplateLiteral
  | TaggedTemplateExpression
  | ClassExpression
  | MetaProperty
  | AwaitExpression;

export interface _Pattern<T extends string> extends _Node<T> {}
export interface T_Pattern {
  Identifier: Identifier;
  ObjectPattern: ObjectPattern;
  ArrayPattern: ArrayPattern;
  AssignmentPattern: AssignmentPattern;
  RestElement: RestElement;
}

export type PatternNoRest = Identifier | ObjectPattern | ArrayPattern | AssignmentPattern;
export type Pattern = Identifier | ObjectPattern | ArrayPattern | AssignmentPattern | RestElement;
export interface _Declaration<T extends string> extends _Statement<T> {}
export interface T_Declaration {
  FunctionDeclaration: FunctionDeclaration;
  VariableDeclaration: VariableDeclaration;
  ClassDeclaration: ClassDeclaration;
}

export type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration;
export interface _ModuleDeclaration<T extends string> extends _Node<T> {}
export interface T_ModuleDeclaration {
  ImportDeclaration: ImportDeclaration;
  ExportNamedDeclaration: ExportNamedDeclaration;
  ExportDefaultDeclaration: ExportDefaultDeclaration;
  ExportAllDeclaration: ExportAllDeclaration;
}

export type ModuleDeclaration =
  | ImportDeclaration
  | ExportNamedDeclaration
  | ExportDefaultDeclaration
  | ExportAllDeclaration;

export interface _ModuleSpecifier<T extends string> extends _Node<T> {
  local: Identifier;
}
export interface T_ModuleSpecifier {
  ImportSpecifier: ImportSpecifier;
  ImportDefaultSpecifier: ImportDefaultSpecifier;
  ImportNamespaceSpecifier: ImportNamespaceSpecifier;
  ExportSpecifier: ExportSpecifier;
}

export type ModuleSpecifier = ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier;

export interface SourceLocation {
  start: Position;
  end: Position;
  source?: string;
}

export interface Position {
  /** >= 1 */
  line: number;
  /** >= 0 */
  column: number;
}

export type CommentType = 'SingleLine' | 'MultiLine' | 'HTMLClose' | 'HTMLOpen' | 'SheBang';

export interface Comment {
  type: CommentType;
  value: string;
  start?: number | undefined;
  end?: number | undefined;
  loc?: any;
}

/**
 * Core types
 */
export interface Program extends _Node<'Program'> {
  sourceType: 'script' | 'module';
  body: (Statement | ModuleDeclaration)[];
}

export interface ArrayExpression extends _Expression<'ArrayExpression'> {
  elements: (Expression | SpreadElement | null)[];
}

export interface ArrayPattern extends _Pattern<'ArrayPattern'> {
  elements?: (RestElement | PatternNoRest | null)[];
}

export type AssignmentOperator =
  | '='
  | '+='
  | '-='
  | '*='
  | '/='
  | '%='
  | '<<='
  | '>>='
  | '>>>='
  | '|='
  | '^='
  | '&='
  | '**=';

export interface AssignmentExpression extends _Expression<'AssignmentExpression'> {
  operator: AssignmentOperator;
  left: Expression | Identifier | ObjectPattern | ArrayPattern;
  right: Expression;
}

export interface AssignmentPattern extends _Pattern<'AssignmentPattern'> {
  left: Identifier | ObjectPattern | ArrayPattern;
  right: Expression;
}

export interface ArrowFunctionExpression extends _Expression<'ArrowFunctionExpression'> {
  params: Parameter[];
  body: BlockStatement | Expression;
  expression: boolean;
  async: boolean;
}

export interface AwaitExpression extends _Expression<'AwaitExpression'> {
  argument: Expression;
}

export type BinaryOperator =
  | '=='
  | '!='
  | '==='
  | '!=='
  | '<'
  | '<='
  | '>'
  | '>='
  | '<<'
  | '>>'
  | '>>>'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '|'
  | '^'
  | '&'
  | 'in'
  | '**'
  | 'instanceof';

export interface BinaryExpression extends _Expression<'BinaryExpression'> {
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}

export interface FunctionBody extends _Statement<'FunctionBody'> {
  body: (ExpressionStatement | Statement)[];
}

export interface BlockStatement extends _Statement<'BlockStatement'> {
  body: Statement[];
}

export interface BreakStatement extends _Statement<'BreakStatement'> {
  label: Identifier | null;
}

export interface CallExpression extends _Expression<'CallExpression'> {
  callee: Expression | Import | Super;
  arguments: (Expression | SpreadElement)[];
}

export interface CatchClause extends _Node<'CatchClause'> {
  param: BindingName | null;
  body: BlockStatement;
}

export interface ClassBody extends _Node<'ClassBody'> {
  body: (MethodDefinition | FieldDefinition)[];
}

export interface FieldDefinition extends _Node<'FieldDefinition'> {
  key: PrivateName | Expression;
  value: Expression | null;
  computed: boolean;
}

export interface ClassDeclaration extends _Declaration<'ClassDeclaration'> {
  id: Identifier | null;
  superClass: Expression | null;
  body: ClassBody;
}

export interface ClassExpression extends _Expression<'ClassExpression'> {
  id: Identifier | null;
  superClass: Expression | null;
  body: ClassBody;
}

export interface MemberExpression extends _Expression<'MemberExpression'> {
  computed: boolean;
  object: Expression | Super;
  property: Expression;
}

export interface ConditionalExpression extends _Expression<'ConditionalExpression'> {
  test: Expression;
  consequent: Expression;
  alternate: Expression;
}

export interface ContinueStatement extends _Statement<'ContinueStatement'> {
  label: Identifier | null;
}

export interface DebuggerStatement extends _Statement<'DebuggerStatement'> {}

export interface DoWhileStatement extends _Statement<'DoWhileStatement'> {
  body: Statement;
  test: Expression;
}

export interface EmptyStatement extends _Statement<'EmptyStatement'> {}

export interface ExportAllDeclaration extends _ModuleDeclaration<'ExportAllDeclaration'> {
  source: Literal;
}

export interface ExportDefaultDeclaration extends _ModuleDeclaration<'ExportDefaultDeclaration'> {
  declaration: Declaration | Expression;
}

export interface ExportNamedDeclaration extends _ModuleDeclaration<'ExportNamedDeclaration'> {
  declaration: Declaration | null;
  specifiers: ExportSpecifier[];
  source: Literal | null;
}

export interface ExportSpecifier extends _ModuleSpecifier<'ExportSpecifier'> {
  exported: Identifier;
}

export interface ExpressionStatement extends _Statement<'ExpressionStatement'> {
  expression: Expression;
  directive?: string;
}

export interface ForInStatement extends _Statement<'ForInStatement'> {
  left: VariableDeclaration | Expression | PatternNoRest;
  right: Expression;
  body: Statement;
}

export interface ForOfStatement extends _Statement<'ForOfStatement'> {
  left: VariableDeclaration | Expression | PatternNoRest;
  right: Expression;
  body: Statement;
  await: boolean;
}

export interface ForStatement extends _Statement<'ForStatement'> {
  init: VariableDeclaration | Expression | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
}

export interface FunctionDeclaration extends _Declaration<'FunctionDeclaration'> {
  id: Identifier | null;
  params: Parameter[];
  body: FunctionBody;
  generator: boolean;
  async: boolean;
}

export interface FunctionExpression extends _Expression<'FunctionExpression'> {
  id: Identifier | null;
  params: Parameter[];
  body: FunctionBody;
  generator: boolean;
  async: boolean;
}

export interface DoExpression extends _Expression<'DoExpression'>, _Pattern<'DoExpression'> {
  body: BlockStatement;
}

export interface Identifier extends _Expression<'Identifier'>, _Pattern<'Identifier'> {
  name: string;
  raw?: string;
}

export interface IfStatement extends _Statement<'IfStatement'> {
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
}

export interface Import extends _Node<'Import'> {}

export interface ImportDeclaration extends _ModuleDeclaration<'ImportDeclaration'> {
  specifiers: (ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier)[];
  source: Literal;
}

export interface ImportDefaultSpecifier extends _ModuleSpecifier<'ImportDefaultSpecifier'> {}

export interface ImportNamespaceSpecifier extends _ModuleSpecifier<'ImportNamespaceSpecifier'> {}

export interface ImportSpecifier extends _ModuleSpecifier<'ImportSpecifier'> {
  imported: Identifier;
}

export interface LabeledStatement extends _Statement<'LabeledStatement'> {
  label: Identifier;
  body: Statement;
}
export interface BigIntLiteral extends _Expression<'Literal'> {
  value: number;
  bigint: string;
  raw?: string;
}

export interface Literal extends _Expression<'Literal'> {
  value: boolean | number | string | null;
  raw?: string;
}

export type LogicalOperator = '&&' | '||';

export interface LogicalExpression extends _Expression<'LogicalExpression'> {
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}

export interface ChainingExpression extends _Expression<'ChainingExpression'> {
  base: Expression;
  chain: [Chain];
}

export interface Chain extends _Expression<'LogicalExpression'> {
  optional: boolean;
}

export interface MemberChain extends _Expression<'MemberChain'> {
  computed: boolean;
  property: Expression;
  optional?: boolean;
}

export interface CallChain extends _Expression<'CallChain'> {
  arguments: [Expression];
  optional?: boolean;
}

export interface MetaProperty extends _Expression<'MetaProperty'> {
  meta: Identifier;
  property: Identifier;
}

export interface PrivateName extends _Node<'PrivateName'> {
  name: string;
}

export interface MethodDefinition extends _Node<'MethodDefinition'> {
  key: PropertyName;
  value: FunctionExpression;
  kind: 'constructor' | 'method' | 'get' | 'set';
  computed: boolean;
  static: boolean;
}

export interface NewExpression extends _Expression<'NewExpression'> {
  callee: Expression;
  arguments: (Expression | SpreadElement)[];
}

export interface Property extends _Node<'Property'> {
  key: PropertyName;
  computed: boolean;
  value: Expression | AssignmentPattern | BindingName;
  kind: 'init' | 'get' | 'set';
  method: boolean;
  shorthand: boolean;
}

export interface ObjectExpression extends _Expression<'ObjectExpression'> {
  properties: (Property | SpreadElement)[];
}

export interface AssignmentProperty extends _Node<'Property'> {
  key: any;
  value: PatternNoRest;
  computed: boolean;
  kind: 'init';
  method: false;
  shorthand: boolean;
}

export interface ObjectPattern extends _Pattern<'ObjectPattern'> {
  properties: (AssignmentProperty | RestElement)[];
}

export interface RegExpLiteral extends _Expression<'Literal'> {
  value: RegExp | null;
  regex: { pattern: string; flags: string } | void;
}

export interface RestElement extends _Pattern<'RestElement'> {
  argument: Identifier | AssignmentPattern | ObjectPattern | ArrayPattern;
}

export interface ReturnStatement extends _Statement<'ReturnStatement'> {
  argument: Expression | null;
}

export interface ImportExpression extends _Expression<'ImportExpression'> {
  source: Expression;
}

export interface SequenceExpression extends _Expression<'SequenceExpression'> {
  expressions: Expression[];
}

export interface SpreadElement extends _Node<'SpreadElement'> {
  argument: Expression;
}

export interface Super extends _Node<'Super'> {}

export interface SwitchCase extends _Node<'SwitchCase'> {
  test: Expression | null;
  consequent: Statement[];
}

export interface SwitchStatement extends _Statement<'SwitchStatement'> {
  discriminant: Expression;
  cases: SwitchCase[];
}

export interface TaggedTemplateExpression extends _Expression<'TaggedTemplateExpression'> {
  tag: Expression;
  quasi: TemplateLiteral;
}

export interface TemplateElement extends _Node<'TemplateElement'> {
  value: { cooked: string | null; raw: string };
  tail: boolean;
}

export interface TemplateLiteral extends _Expression<'TemplateLiteral'> {
  quasis: TemplateElement[];
  expressions: Expression[];
}

export interface ThisExpression extends _Expression<'ThisExpression'> {}

export interface ThrowStatement extends _Statement<'ThrowStatement'> {
  argument: Expression;
}

export interface TryStatement extends _Statement<'TryStatement'> {
  block: BlockStatement;
  handler: CatchClause | null;
  finalizer: BlockStatement | null;
}

export type UnaryOperator = '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';
export interface UnaryExpression extends _Expression<'UnaryExpression'> {
  operator: UnaryOperator | string;
  argument: Expression;
  prefix: boolean;
}

export type UpdateOperator = '++' | '--';
export interface UpdateExpression extends _Expression<'UpdateExpression'> {
  operator: UpdateOperator;
  argument: Expression;
  prefix: boolean;
}

export interface VariableDeclaration extends _Declaration<'VariableDeclaration'> {
  declarations: VariableDeclarator[];
  kind: 'var' | 'let' | 'const';
}

export interface VariableDeclarator extends _Node<'VariableDeclarator'> {
  id: Identifier | ObjectPattern | ArrayPattern;
  init: Expression | null;
}

export interface WhileStatement extends _Statement<'WhileStatement'> {
  test: Expression;
  body: Statement;
}

export interface WithStatement extends _Statement<'WithStatement'> {
  object: Expression;
  body: Statement;
}

export interface YieldExpression extends _Expression<'YieldExpression'> {
  argument: Expression | null;
  delegate: boolean;
}
