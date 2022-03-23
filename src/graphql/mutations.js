/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEngine = /* GraphQL */ `
  mutation CreateEngine(
    $input: CreateEngineInput!
    $condition: ModelEngineConditionInput
  ) {
    createEngine(input: $input, condition: $condition) {
      id
      unitNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEngine = /* GraphQL */ `
  mutation UpdateEngine(
    $input: UpdateEngineInput!
    $condition: ModelEngineConditionInput
  ) {
    updateEngine(input: $input, condition: $condition) {
      id
      unitNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEngine = /* GraphQL */ `
  mutation DeleteEngine(
    $input: DeleteEngineInput!
    $condition: ModelEngineConditionInput
  ) {
    deleteEngine(input: $input, condition: $condition) {
      id
      unitNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateConditionMonitoringDataRecord = /* GraphQL */ `
  mutation UpdateConditionMonitoringDataRecord(
    $input: UpdateConditionMonitoringDataRecordInput!
    $condition: ModelConditionMonitoringDataRecordConditionInput
  ) {
    updateConditionMonitoringDataRecord(input: $input, condition: $condition) {
      id
      unitNumber
      dateTime
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteConditionMonitoringDataRecord = /* GraphQL */ `
  mutation DeleteConditionMonitoringDataRecord(
    $input: DeleteConditionMonitoringDataRecordInput!
    $condition: ModelConditionMonitoringDataRecordConditionInput
  ) {
    deleteConditionMonitoringDataRecord(input: $input, condition: $condition) {
      id
      unitNumber
      dateTime
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createConditionMonitoringDataRecord = /* GraphQL */ `
  mutation CreateConditionMonitoringDataRecord(
    $input: CreateConditionMonitoringDataRecordInput!
    $condition: ModelConditionMonitoringDataRecordConditionInput
  ) {
    createConditionMonitoringDataRecord(input: $input, condition: $condition) {
      id
      unitNumber
      dateTime
      data
      createdAt
      updatedAt
      owner
    }
  }
`;
